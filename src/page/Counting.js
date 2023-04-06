import React, { useState } from "react";
import InputForm from "../components/inputForm";

export default function Counting() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  function handleValue1(e) {
    setValue1(e.target.value);
  }

  function handleValue2(e) {
    setValue2(e.target.value);
  }
  function handleValue3(e) {
    setValue3(e.target.value);
  }

  function handleValue4(e) {
    setValue4(e.target.value);
  }

  const total1 = parseFloat(value1) + parseFloat(value2);
  const total2 = parseFloat(value1) + parseFloat(value2);
  const total3 = parseFloat(value1) + parseFloat(value2);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit w-1/2 text-center ">
        <div className="py-2">
          <h1 className="text-2xl font-semibold">Perhitungan Emisi</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <InputForm props={{ title: "" }} onChange={handleValue1} />
        </div>
        <div className="py-2">
          <h1 className="text-2xl font-semibold">
            Perhitungan estimasi biaya investasi
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <InputForm props={{ title: "" }} onChange={handleValue2} />
          <InputForm props={{ title: "" }} onChange={handleValue3} />
          <InputForm props={{ title: "" }} onChange={handleValue4} />
        </div>
        <div className="py-2">
          <h1 className="text-2xl font-semibold">Perhitungan biaya produksi</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex space-x-5 justify-center">
          <div className="font-semibold">Total 1</div>
          <div>{total1}</div>
        </div>
        <div className="flex space-x-5 justify-center">
          <div className="font-semibold">Total 2</div>
          <div>{total2}</div>
        </div>
        <div className="flex space-x-5 justify-center">
          <div className="font-semibold">Total 3</div>
          <div>{total3}</div>
        </div>
      </div>
    </div>
  );
}
