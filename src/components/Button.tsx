import { BootstrapColors } from "../helper/Enumerators";

interface Props {
    children: string;
    bootstrapColor?:
        'primary' |
        'secondary' |
        'success' |
        'danger' |
        'warning' |
        'info' |
        'light' |
        'dark';
    onClick: () => void;
}

function Button ({children, bootstrapColor = "dark", onClick}: Props) {
    
    return (
        <button type="button" className={'btn btn-' + bootstrapColor} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;