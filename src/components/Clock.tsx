interface Props {
  lastUpdate: number;
  light: boolean;
}

export default ({ lastUpdate, light }: Props) => {
  return (
    <div className={light ? "light" : ""}>
      {format(new Date(lastUpdate))}
      {/* //@ts-ignore */}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  );
};

const format = (t: Date) =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const pad = (n: number) => (n < 10 ? `0${n}` : n);
