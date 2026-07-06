import { profile } from "@/data/profile";

// `X-SOCIALPROFILE;type=github:${profile.social.github}`,
// `X-SOCIALPROFILE;type=linkedin:${profile.social.linkedin}`,

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
    `ADR;TYPE=HOME:;;;${profile.location.city};${profile.location.state};;${profile.location.country}`,
    `NOTE:${profile.bio}`,
    "END:VCARD",
  ].join("\r\n");

  const file = new File(
    [vcardData],
    "Jitendra_Sachwani.vcf",
    {
      type: "text/x-vcard", // I'd try this MIME type first
    }
  );

  // Browser doesn't support file sharing
  if (
    !navigator.share ||
    !navigator.canShare ||
    !navigator.canShare({ files: [file] })
  ) {
    downloadVCard(vcardData);
    return;
  }

  try {
    await navigator.share({
      title: profile.fullName,
      files: [file],
    });
  } catch (err) {
    // User cancelled the share dialog
    if ((err as DOMException).name === "AbortError") {
      return;
    }

    console.error("Share failed, falling back to download", err);

    // Browser/device bug? Download instead.
    // downloadVCard(vcardData);
  }
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