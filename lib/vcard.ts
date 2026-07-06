import { profile } from "@/data/profile";

export async function shareVCard() {
  const vcardData = createVCard();
  const file = new File([vcardData], "Jitendra_Sachwani.vcf", {
    type: "text/x-vcard",
  });

  try {
    await navigator.share({
      title: profile.fullName,
      files: [new File(["Hello"], "hello.txt", { type: "text/plain" })],
    });
  } catch (err) {
    if ((err as DOMException).name === "AbortError") {
      return;
    }
    console.error("Share failed, falling back to download", err);

    alert(`Failed to share vCard. Falling back to download. Error: ${(err as Error).message}`);
    // downloadVCard(vcardData);
  }
}

function createVCard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.fullName}`,
    `N:${profile.lastName};${profile.firstName};;;`,
    `ORG:${profile.company}`,
    `TITLE:${profile.title}`,
    `TEL;TYPE=CELL,VOICE:${profile.phone}`,
    `EMAIL;TYPE=PREF,INTERNET:${profile.email}`,
    `URL:${profile.website}`,
    `X-SOCIALPROFILE;type=linkedin:${profile.social.linkedin}`,
    `X-SOCIALPROFILE;type=github:${profile.social.github}`,
    `ADR;TYPE=HOME:;;;${profile.location.city};${profile.location.state};;${profile.location.country}`,
    `NOTE:${profile.bio}`,
    "END:VCARD",
  ].join("\r\n");
}

function downloadVCard(vcardData: string) {
  const blob = new Blob([vcardData], {
    type: "text/vcard;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Jitendra_Sachwani.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
