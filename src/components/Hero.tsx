import Button from "./Button";

export default function Hero() {
    return(
        <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-100 to-blue-200">
            <h1 className="text-5xl font-bold mb-6">
                歡迎來到我的網站
            </h1>
            <p className="text-lg text-gray-700 mb-8">
                這是一個一頁式網站展示頁面
            </p>
            <Button label="開始體驗" onClick={() => alert("Clicked!")} />
        </section>
    )
}








