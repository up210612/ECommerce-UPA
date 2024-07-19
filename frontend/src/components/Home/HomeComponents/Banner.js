import Carrousell from "./Carrousell";

export default function Banner() {
  return (
    <div>
    <section class="bg-muted text-muted-foreground p-8 text-center mb-8">
      <h1 class="text-3xl font-bold mb-4">Productos</h1>
      
      <div>
        <Carrousell/>
      </div>
      
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation.
      </p>
    </section>
  
    <section class="bg-muted text-muted-foreground p-4 text-center mb-8">
      <h2 class="text-xl font-bold">Ofertas</h2>
    </section>
  </div>
  );
}


/**
 * <CustomButton to="/productX">Producto</CustomButton>
 */