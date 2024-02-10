import { component$ } from "@builder.io/qwik";

interface PdfViewerProps {
  pdfUrl: string;
}
export const PdfViewer = component$<PdfViewerProps>(({ pdfUrl }) => {
  return (
    <object class="h-[50vh] w-full" data={pdfUrl} type="application/pdf">
      <iframe
        width="100%"
        height="100%"
        src={`https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`}
      ></iframe>
    </object>
  );
});
