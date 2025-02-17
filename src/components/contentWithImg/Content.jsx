
import styles from "./styles.module.css"

function Content({title,text,src}){
    return (
        <>
            <div>
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
            </div>
            <div> <img src={src} /></div>
        </>
    )
}

export default Content;