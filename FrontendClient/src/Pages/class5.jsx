import candy from "../juegos/candy-crush-master/index.html";

export default function Taller(){
    return(
        <div>
            <div dangerouslySetInnerHTML={{__html: candy}}/>
            {/* <iframe src={candy} width="100%" height="100%"></iframe> */}
        </div>
    )
}