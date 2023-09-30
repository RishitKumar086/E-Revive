import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

export default function App() {
  const [center, setCenter] = useState([0, 1]);
  const [zoom, setZoom] = useState(9);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  const facilities = {
    "Environ Industries": {
      pinCode: 572106,
      coordinates: [13.384609681956865, 77.10834543424396],
      phoneNo: 9035564491,
    },
    "Epragathi Group": {
      pinCode: 572106,
      coordinates: [13.38408781037056, 77.11218844149663],
      phoneNo: 18002585106,
    },
    "Sri Balaji Enterprises PP Recyclers": {
      pinCode: 572106,
      coordinates: [13.376866402344755, 77.116968370758],
      phoneNo: 0,
    },
    "Dry Waste Collection Center": {
      pinCode: 572102,
      coordinates: [13.335955905069259, 77.10903219443654],
      phoneNo: 0,
    },
    "Certified E-Waste Management Company": {
      pinCode: 572128,
      coordinates: [13.602235343515352, 77.03380932322922],
      phoneNo: 9321148070,
    },
    "Best E-waste Recyclers private limited": {
      pinCode: 572128,
      coordinates: [13.518536118405114, 77.04103401265937],
      phoneNo: 0,
    },
    "Evergreen E-waste recycling and dismantling": {
      pinCode: 572128,
      coordinates: [13.47446899274242, 77.03610807367825],
      phoneNo: 9845590366,
    },
    "Bangalore Eco Park Pvt LTD": {
      pinCode: 562132,
      coordinates: [13.239485977848792, 77.27150935637505],
      phoneNo: 9845611666,
    },
    "GRKMS Private Limited": {
      pinCode: 562111,
      coordinates: [13.22778877837764, 77.26601619243606],
      phoneNo: 9980255556,
    },
    "E-Parisaraa": {
      pinCode: 562111,
      coordinates: [13.22778877837764, 77.25468654181185],
      phoneNo: 9980147680,
    },
    "E2E RECYCLING BUSINESS PVT. LTD.": {
      pinCode: 562132,
      coordinates: [13.228290098443255, 77.25073833023069],
      phoneNo: 18005726069,
    },
    "Rashi E-Waste": {
      pinCode: 561205,
      coordinates: [13.384609681956865, 77.10834543424396],
      phoneNo: 8027600077,
    },
    "sa ewaste recyclers": {
      pinCode: 562163,
      coordinates: [13.26193265371352, 77.55079165894064],
      phoneNo: 9901662512,
    },
    "E- Parisaraa Private Limited": {
      pinCode: 560058,
      coordinates: [13.032347578019984, 77.49606053541864],
      phoneNo: 8028360902,
    },
    "i7 EWaste Recyclers": {
      pinCode: 562123,
      coordinates: [13.022776883719931, 77.47220337901163],
      phoneNo: 7337345151,
    },
    "Hi Tech eWaste": {
      pinCode: 560060,
      coordinates: [12.999353855562536, 77.57977418038105],
      phoneNo: 1800222222,
    },
    "Ewaste Hub": {
      pinCode: 560027,
      coordinates: [12.95534239563263, 77.59429038536739],
      phoneNo: 9066319066,
    },
    "Elxion E-waste Recycling": {
      pinCode: 560078,
      coordinates: [12.924568602740347, 77.5802567639515],
      phoneNo: 8026589066,
    },
  };

  function handleMarkerClick(event) {
    setShowModal(true);
    const id = event.payload;
    text = `\n
    Name: ${id}\n
    Pin Code : ${facilities[id].pinCode}\n
    Phone Number: ${facilities[id].phoneNo}\n
    `;
    setModalText(text);
  }

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  return (
    <div className="py-5 px-5 max-w-sm mx-auto bg-zinc-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <button
        onClick={handleLocationClick}
        className="text-purple-600 py-5 px-5 justify-center text-1xl"
      >
        Find Location
      </button>
      {center ? (
        <Map
          height={625}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setZoom(zoom);
          }}
        >
          <Marker
            width={50}
            anchor={center}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          {Object.keys(facilities).map((id) => (
            <Marker
              anchor={facilities[id].coordinates}
              color="hsl(138deg 81% 54%)"
              width={50}
              payload={id}
              onClick={handleMarkerClick}
            />
          ))}
        </Map>
      ) : null}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Facility Details</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {modalText}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
