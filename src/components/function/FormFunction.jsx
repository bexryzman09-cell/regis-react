export async function register(data) {
    try {
        const api = await fetch("https://api.restful-api.dev/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "6c5bb768-6cae-49b2-9e2f-4d17bd6d6bbe",
            },
            body: JSON.stringify(data)
        });
        const result = await api.json();

        if (result.token) {
            window.location = "/home";
            localStorage.setItem("token", result.token)
            localStorage.setItem("user", JSON.stringify(result.user));
        }
    }
    catch (error) {
        console.error("error")
        alert("Ошибка сети")
    }

}
