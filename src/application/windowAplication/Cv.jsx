import React from 'react';
import assets from '../../assets';

const Cv = ({ CvClose }) => {
  const pdfUrl = 'src/assets/cv_pdf/MYM_SHARAF_CV.pdf'; // Replace with the actual path to your PDF file

  return (
    <div>
      <assets.Layer icon={assets.Certificate} image={assets.Exit} name={'CV'} onClose={CvClose}>
        <iframe src={pdfUrl} width="100%" height="600px" title="CV PDF" />
      </assets.Layer>
    </div>
  );
};

export default Cv;
