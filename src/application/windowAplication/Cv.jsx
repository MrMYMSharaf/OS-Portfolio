import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import assets from '../../assets';

const Cv = ({ CvClose }) => {
  const pdfUrl = 'src/assets/cv_pdf/MYM_SHARAF_CV.pdf'; // Replace with the actual path to your PDF file

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <assets.Layer icon={assets.Certificate} image={assets.Exit} name={'CV'} onClose={CvClose}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`}>
          <div
            style={{
              border: '1px solid rgba(0, 0, 0, 0.3)',
              height: '600px',
            }}
          >
            <Viewer
              fileUrl={pdfUrl}
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </assets.Layer>
    </div>
  );
};

export default Cv;
