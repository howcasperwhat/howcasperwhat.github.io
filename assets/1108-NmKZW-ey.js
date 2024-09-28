const n=`function defangIPaddr(address: string): string {\r
  return address.split('\\.').join('[.]')\r
}`;export{n as default};
