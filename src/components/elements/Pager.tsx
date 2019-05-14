import React from 'react';
import styled from 'styled-components'
import { Dropdown, SplitButton, Pagination, Spinner } from 'react-bootstrap';
import { Flex } from 'components/elements';

type Params = { pageNumber: number, pageSize?: number }

interface Props {
  pageNumber: number;
  pageSize: number;
  total: number;
  pages: number;
  loading: boolean;
  onClick: (params: Params) => void;
}

export class Pager extends React.Component<Props> {

  state = {
    segmentation: 5,
    allSegments: null,
    currentSegment: null,
    curSegmentStart: null,
    curSegmentEnd: null
  }

  static getDerivedStateFromProps(props, state) {
    const { total, pages, pageNumber } = props;
    if (total > 0) {
      const { segmentation } = state;
      const currentSegment = pageNumber ? Math.ceil(pageNumber / segmentation) : 1;
      const allSegments = Math.ceil(pages / segmentation);

      const curSegmentStart = currentSegment * segmentation + 1 - segmentation;
      const curSegmentEnd = (currentSegment * segmentation) > pages ? pages : (currentSegment * segmentation);

      return {
        allSegments: allSegments,
        currentSegment: currentSegment,
        curSegmentStart: curSegmentStart,
        curSegmentEnd: curSegmentEnd
      };
    }
    else {
      return null;
    }
  }

  handleClick = (event) => {
    event.stopPropagation();
    const { segmentation, currentSegment } = this.state;
    const { pageNumber, pages } = this.props;
    const { id } = event.currentTarget;
    switch (id) {
      case 'first':
        if (pageNumber > 0) this.setPage(0);
        break;
      case 'prev':
        if (pageNumber > 0) this.setPage(pageNumber - 1);
        break;
      case 'many_prev':
        this.setPage(segmentation * currentSegment - segmentation);
        break;
      case 'many_next':
        this.setPage(segmentation * currentSegment + 1);
        break;
      case 'next':
        if (pageNumber < pages - 1) this.setPage(pageNumber + 1);
        break;
      case 'last':
        if (pageNumber < pages - 1) this.setPage(pages - 1);
    }
  }

  clickPage = (page) => {
    const { pageNumber } = this.props;
    if (page !== pageNumber)
      this.setPage(page);
  }

  setPage = (page: number) => {
    // console.log('%c setPage', 'color: red; background-color: darkgray;', page);
    this.props.onClick({ pageNumber: page });
  }

  setPageSize = (e) => {
    const id = parseInt(e.target.id);
    if (id !== this.props.pageSize) {
      this.props.onClick({ pageNumber: 0, pageSize: id });
    }
  }

  render() {
    const { handleClick, clickPage, setPageSize } = this;
    const { pageNumber, pageSize, loading, total } = this.props;
    const { currentSegment, allSegments, curSegmentStart, curSegmentEnd } = this.state;
    let list = [], many_prev = false, many_next = false;

    if (currentSegment > 1 && currentSegment < allSegments) {
      many_prev = true;
      many_next = true;
    } else
      if (currentSegment > 1) {
        many_prev = true;
      } else
        if (currentSegment < allSegments) {
          many_next = true;
        }
    // формируем странички пейджера
    for (let i = curSegmentStart; i <= curSegmentEnd; ++i)
      list.push(<Pagination.Item key={i} onClick={() => clickPage(i - 1)} active={(i - 1) === pageNumber}>{i}</Pagination.Item>);

    return <Flex justify='space-between'>
      <StyledPagination>
        <Pagination.First id='first' onClick={handleClick} />
        <Pagination.Prev id='prev' onClick={handleClick} />
        {many_prev && <Pagination.Ellipsis id='many_prev' onClick={handleClick} />}
        {total ? list : <Pagination.Item>1</Pagination.Item>}
        {many_next && <Pagination.Ellipsis id='many_next' onClick={handleClick} />}
        <Pagination.Next id='next' onClick={handleClick} />
        <Pagination.Last id='last' onClick={handleClick} />
      </StyledPagination>

      {loading ? <Spinner animation="border" variant="danger" /> : null}

      <section>
        <span className='mr-2'>Строк на странице:</span>
        <SplitButton title={pageSize} variant='danger' id='pageSizeToggler'>
          <Dropdown.Item onClick={setPageSize} id={5}>5</Dropdown.Item>
          <Dropdown.Item onClick={setPageSize} id={10}>10</Dropdown.Item>
          <Dropdown.Item onClick={setPageSize} id={20}>20</Dropdown.Item>
        </SplitButton>
      </section>
    </Flex>;
  }
}

const StyledPagination = styled(Pagination)`
  .page-item {
    background-color: #fff;
    .page-link {
      color: ${({ theme }) => theme.activeColor};
    }
  }
  .active {
    .page-link {
      color: #fff;
      border-color: ${({ theme }) => theme.activeColor};
      background-color: ${({ theme }) => theme.activeColor};
    }
  }
`