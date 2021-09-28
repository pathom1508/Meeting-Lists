function ManualDetail(props) {
  const { manual, onManualClick } = props;
  return (
    <div>
      <p>{manual.detail}</p>
      <img className="pic1"  src={manual.thumbnailUrl} onClick={() => {onManualClick(manual)}}/>
      <br />
    </div>
  );
}
export default ManualDetail;
