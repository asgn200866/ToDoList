import '../components/headerData.css';
import { useState } from 'react';
import { useEffect } from 'react';

export function HeaderData() {
  const [data, setData] = useState(new Date().toLocaleDateString());

  return <span>Data now: {data}</span>;
}
