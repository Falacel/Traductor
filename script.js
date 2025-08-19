async function translateText() {
    let text = document.getElementById("inputText").value
    let from = document.getElementById("fromLang").value
    let to = document.getElementById("toLang").value

    if(!text) {
        document.getElementById("outputText").innerText = "⚠️ Escribe algo para traducir."
        return
    }

    try{
        let response = await fetch("https://libretranslate.de/translate",{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({
                q: text,
                source: from,
                target: to,
                format: "text"
            })
        })
        
    let data = await response.json();
        document.getElementById("outputText").innerText = data.translatedText;
    } catch (error) {
        document.getElementById("outputText").innerText = "❌ Error al traducir";
        console.error(error);
    }
}