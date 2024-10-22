function withProductsComponent(Component, dataList) {
  return (
    <>
      {dataList.map((item, i) => (
        <Component key={i} product={item}></Component>
      ))}
    </>
  );
}

export default withProductsComponent;
