import "./ButtonCard.css"

export default function ButtonCard({ link, icon: Icon, text }){
    return (
        <a href={link} className="button">
          {Icon && <Icon className="icon" />}
          {text}
        </a>
      );
}