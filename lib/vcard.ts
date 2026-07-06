import { profile } from "@/data/profile";

export async function shareVCard2() {
  const file = new File(
    ["Hello Pragya~!"],
    "hello_pragya.txt",
    { type: "text/plain" }
  );

  await navigator.share({
    files: [file],
  });
}

export async function shareVCard() {
  const vcardData = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.fullName}`,
    `N:${profile.lastName};${profile.firstName};;;`,
    `ORG:${profile.company}`,
    `TITLE:${profile.title}`,
    `TEL;TYPE=CELL,VOICE:${profile.phone}`,
    `EMAIL;TYPE=PREF,INTERNET:${profile.email}`,
    `URL:${profile.website}`,
    `X-SOCIALPROFILE;type=github:${profile.social.github}`,
    `X-SOCIALPROFILE;type=linkedin:${profile.social.linkedin}`,
    `ADR;TYPE=HOME:;;${profile.location.city};${profile.location.state};${profile.location.country}`,
    `NOTE:${profile.bio}`,
    "END:VCARD",
  ].join("\r\n");

  const file = new File([vcardData], "Jitendra_Sachwani.vcf", {
    type: "text/vcard",
  });

  try {
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: profile.fullName,
        text: `Save ${profile.fullName}'s contact`,
        files: [file],
      });
      return;
    }

    alert("Web Share API not supported or cannot share files. Falling back to download.");

    console.log("Web Share API not supported or cannot share files. Falling back to download.");

    // Fallback: Download
    const blob = new Blob([vcardData], {
      type: "text/vcard;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Jitendra_Sachwani.vcf";
    link.click();

    URL.revokeObjectURL(url);
  } catch (err) {
    alert(`Error: ${(err as Error).name} - ${(err as Error).message}`);
    // User cancelled the share dialog
    if ((err as Error).name !== "AbortError") {
      console.error("Unable to share vCard", err);
    }
  }
}
