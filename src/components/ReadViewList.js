import "./ReadViewList.css";

function ReadViewListItem({ item }) {
  return (
    <div className="ReadViewListItem">
      <img
        className="ReadViewListItem-img"
        src={item.thumbnail}
        alt={item.title}
      />
      <div className="ReadViewListItem-box1">
        <b>{item.title}</b>
        <p>{item.desc}</p>
        <p>{`${item.apoDate}일 전 · ${item.replyCount}개의 댓글`}</p>
      </div>

      <div className="ReadViewListItem-box2">
        <img
          className="Writer-img"
          src={item.writerProfile}
          alt={item.writerId}
        />
        <p>
          {`by`}
          <span className="bold">{item.writerId}</span>
        </p>
        <p>{item.likeCount}</p>
      </div>
    </div>
  );
}

function ReadViewList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ReadViewListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReadViewList;
