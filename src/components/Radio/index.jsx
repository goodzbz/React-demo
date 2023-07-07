import { Radio } from 'antd';
import { useState } from 'react';
const Radios = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>男</Radio>
      <Radio value={2}>女</Radio>
    </Radio.Group>
  );
};
export default Radios;