export default function Inputbox({label, placeholder}){
    return <div>
        <div>
            {label}
        </div>
        <input placeholder={placeholder} className="w-full px-2 py-1 border"/>
    </div>
}