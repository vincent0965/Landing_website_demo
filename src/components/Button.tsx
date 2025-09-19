type ButtonProps = {
    label: string
    onClick?: () => void
}

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
            {label}
        </button>
    )
}