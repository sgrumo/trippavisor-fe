import { component$ } from "@builder.io/qwik";

interface PdfViewerProps {
  pdfUrl: string;
}
export const PdfViewer = component$<PdfViewerProps>(({ pdfUrl }) => {
  return (
    <object data={pdfUrl} type="application/pdf">
      <iframe
        src={`https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`}
      ></iframe>
    </object>
  );
});
