import React, { useEffect, useState } from "react";

function HireFilter({ setVariable, address, creatives }) {
  let availities = [
    {
      name: "Tất cả",
      code: 0,
    },
    {
      name: "Freelancer",
      code: 1,
    },
    {
      name: "Full-time",
      code: 2,
    },
  ];
  let payments = [
    {
      name: "Tất cả",
      code: 0,
    },
    {
      name: "Chấp nhận thanh toán trên Dribbble",
      code: 1,
    },
  ];

  const [payment, setPayment] = useState(0);
  const [availability, setAvailability] = useState(0);
  const [city, setCity] = useState("");
  const [creative, setCreative] = useState([]);
  const [change, setChange] = useState(0);

  const handelChangeCreative = (id) => {
    let isExist = false;
    creative.map((item) => {
      if (item == id) isExist = true;
    });
    let result = creative;
    if (isExist) result = result.filter((item) => item != id);
    else result.push(id);
    setChange(change + 1)
    setCreative(result);
  };
  useEffect(() => {
    let variable = { availability, address: city, creative };
    setVariable(variable);
  }, [payment, availability, city, change]);
  return (
    <div className="flex_aside">
      <form className="filter_list">
        <div className="filter_item">
          <p className="filter_title">
            <i class="fa-regular fa-grid-2"></i> Khả dụng
          </p>
          <div className="input_list">
            {availities.map((item, idx) => (
              <div className="input_item" key={idx}>
                <input
                  type="radio"
                  name="availability"
                  id={`availability_${item.code}`}
                  value={item.code}
                  hidden
                  defaultChecked={idx == 0 ? true : false}
                  onChange={() => setAvailability(item.code)}
                />
                <label
                  htmlFor={`availability_${item.code}`}
                  className="input_design"
                >
                  <div className="bg"></div>
                </label>
                <label
                  htmlFor={`availability_${item.code}`}
                  className="input_lable"
                >
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="filter_item">
          <p className="filter_title">
            <i class="fa-regular fa-credit-card-front"></i>Thanh toán
          </p>
          <div className="input_list">
            {payments.map((item, idx) => (
              <div className="input_item" key={idx}>
                <input
                  type="radio"
                  name="payment"
                  id={`payment_${item.code}`}
                  value={item.code}
                  hidden
                  defaultChecked={idx == 0 ? true : false}
                  onChange={() => setPayment(item.code)}
                />
                <label
                  htmlFor={`payment_${item.code}`}
                  className="input_design"
                >
                  <div className="bg"></div>
                </label>
                <label htmlFor={`payment_${item.code}`} className="input_lable">
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="filter_item">
          <p className="filter_title">
            <i class="fa-regular fa-location-dot"></i> Vị trí
          </p>
          <select
            className="filter_input-selector"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value={''}>Tất cả</option>
            {address.map((item) => (
              <option value={item._id} key={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="filter_item">
          <p className="filter_title">
            <i class="fa-regular fa-chart-tree-map"></i> Lĩnh vực sáng tạo
          </p>
          <div className="input_list">
            {creatives.map((item, idx) => (
              <div className="input_item" key={item._id}>
                <input
                  type="checkbox"
                  id={`creative_${idx}`}
                  hidden
                  onChange={() => handelChangeCreative(item._id)}
                />
                <label htmlFor={`creative_${idx}`} className="input_design">
                  <div className="bg"></div>
                </label>
                <label htmlFor={`creative_${idx}`} className="input_lable">
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default HireFilter;
