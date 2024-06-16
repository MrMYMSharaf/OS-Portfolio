import React, { useState } from 'react';
import assets from '../../assets';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Gslides, Islides, Uslides } from '/src/data/CertificationData.js';
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

const Certificate = ({ CertificateonClose }) => {
  const [openState, setOpenState] = useState({
    Gopen: false,
    Iopen: false,
    Uopen: false,
  });

  const handleOpen = (source) => {
    setOpenState((prevState) => ({
      ...prevState,
      [`${source}open`]: true,
    }));
  };

  const handleClose = (source) => {
    setOpenState((prevState) => ({
      ...prevState,
      [`${source}open`]: false,
    }));
  };

  return (
    <div>
      <assets.Layer icone={assets.Certificate} image={assets.Exit} name={'Certificate'} onClose={CertificateonClose}>
        <div className="bg-slate-600 text-white flex justify-center">
          <div className="container mx-auto flex justify-between flex-wrap p-5">
            {/* Google */}
            <div className="md:max-w-48 max-w-28 rounded overflow-hidden shadow-lg bg-slate-400 mb-5 cursor-pointer" onClick={() => handleOpen('G')}>
              <img className="w-full" src={assets.Cgoogle} alt="Google Logo" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Google</div>
              </div>
            </div>

            {/* Udemy */}
            <div className="md:max-w-48 max-w-28 rounded overflow-hidden shadow-lg bg-slate-400 mb-5 cursor-pointer" onClick={() => handleOpen('U')}>
              <img className="w-full" src={assets.Cudemy} alt="Udemy Logo" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Udemy</div>
              </div>
            </div>

            {/* Linkdin */}
            <div className="md:max-w-48 max-w-28 rounded overflow-hidden shadow-lg bg-slate-400 mb-5 cursor-pointer" onClick={() => handleOpen('I')}>
              <img className="w-full" src={assets.CLinkdin} alt="IBM Logo" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Linkdin</div>
              </div>
            </div>
            {/* IBM */}
            <div className="md:max-w-48 max-w-28 rounded overflow-hidden shadow-lg bg-slate-400 mb-5 cursor-pointer" onClick={() => handleOpen('I')}>
              <img className="w-full" src={assets.Cibm} alt="IBM Logo" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">IBM</div>
              </div>
            </div>
             {/* Add more Card Here */}
          </div>
           {/* Lightbox */}
          {['G', 'I', 'U'].map((source) => (
            <Lightbox
              key={source}
              plugins={[Captions, Counter, Zoom, Thumbnails]}
              captions={{
                showToggle: true,
                descriptionTextAlign: 'end',
                titleTextAlign: 'center',
              }}
              open={openState[`${source}open`]}
              close={() => handleClose(source)}
              slides={source === 'G' ? Gslides : source === 'I' ? Islides : Uslides}
            />
          ))}
        </div>
      </assets.Layer>
    </div>
  );
}

export default Certificate;
