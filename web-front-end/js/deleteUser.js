document.getElementById("delete-user-form").addEventListener("submit", async (event) => {
	event.preventDefault();
	const username = document.getElementById("other-username").value;
	const response = await fetch(`https://fluffy-sniffle-j9r5gg6gp67hj75v-4001.app.github.dev`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username
		})
	});
		
});