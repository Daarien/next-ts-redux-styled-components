import Link from "next/link";
import { connect } from "react-redux";
import { TState } from "store";
import { ClockState } from "store/clock";
import Clock from "./Clock";
import AddCount from "./AddCount";

interface Props extends ClockState {
  title: string;
  linkTo: string;
}

export default connect(({ clock }: TState) => clock)(
  ({ title, linkTo, lastUpdate, light }: Props) => {
    return (
      <div>
        <h1>{title}</h1>
        <Clock lastUpdate={lastUpdate} light={light} />
        <AddCount />
        <nav>
          <Link href={linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    );
  }
);
