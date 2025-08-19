async function translateText() {
    const text = document.getElementById("inputText").value;
    const to = document.getElementById("toLang").value;

    if (!text) {
        document.getElementById("outputText").innerText = "⚠️ Escribe algo para traducir.";
        return;
    }

    try {
        
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;

        const response = await fetch(url);
        const data = await response.json();

        // data[0] contiene el texto traducido
        const translatedText = data[0].map(item => item[0]).join('');
        document.getElementById("outputText").innerText = translatedText;

    } catch (error) {
        document.getElementById("outputText").innerText = "❌ Error al traducir";
        console.error(error);
    }
}
