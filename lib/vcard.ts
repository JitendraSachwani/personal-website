/**
 * Generates and downloads a vCard (.vcf) file for Jitendra Sachwani.
 */
export function downloadVCard() {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Jitendra Sachwani',
    'N:Sachwani;Jitendra;;;',
    'ORG:Jitendra Sachwani',
    'TITLE:Senior Software Engineer / Full Stack Developer',
    'TEL;TYPE=CELL,VOICE:+911234567890',
    'EMAIL;TYPE=PREF,INTERNET:jitendra.sachwani@example.com',
    'URL:https://jitendrasachwani.dev',
    'X-SOCIALPROFILE;type=github:https://github.com/JitendraSachwani',
    'X-SOCIALPROFILE;type=linkedin:https://linkedin.com/in/jitendra-sachwani',
    'ADR;TYPE=HOME:;;Mumbai;Maharashtra;India',
    'NOTE:Building scalable software with clean architecture and beautiful user experiences.',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Jitendra_Sachwani.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
