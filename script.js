const copyButton = document.getElementById("copy-ip");

const serverIP = "suxariksmp.falix.gg";

copyButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(serverIP);

        const originalText = copyButton.textContent;

        copyButton.textContent = "✓ Скопировано";

        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 1800);

    } catch (error) {
        const input = document.createElement("input");

        input.value = serverIP;
        document.body.appendChild(input);

        input.select();
        document.execCommand("copy");

        input.remove();

        copyButton.textContent = "✓ Скопировано";

        setTimeout(() => {
            copyButton.textContent = "Скопировать IP";
        }, 1800);
    }
});
