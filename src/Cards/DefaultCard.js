export default function DefaultCard(props) {
    return (
        <div className="card default">
            <div className="default-header">
                <div className="default-title">{props.title}</div>
            </div>
            <div className="default-body">
                {props.children}
            </div>
        </div>
    );
}