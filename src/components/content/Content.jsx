import "./Content.css";
import RowData from "../../constants/Urls";
import Row from "../row/Row";

export default function Content() {

  return (
    <div className="content-wrapper">
      {RowData.map((el) => {
        return <Row title = {el.title} url = {el.url}/>
      })}
    </div>
  )
}

