import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { Space, Button, InputNumber } from 'antd';
import { add } from '@monorepo-demo/utils';
import 'antd/dist/antd.css';

const Component: FunctionComponent = () => {
  const [result, setResult] = useState<number>();
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);

  return (
    <>
      <Space>
        <InputNumber value={num1} onChange={setNum1} />
        <InputNumber value={num2} onChange={setNum2} />
        <Button type="primary" onClick={() => setResult(add(num1, num2))}>
          计算
        </Button>
        <span>结果：{result}</span>
      </Space>
    </>
  );
};

export default Component;
