import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="VJC OVERSEAS" invert={invert}>
          Koramangala
          <br />
          Bangalore
          <br />
          000000
        </Office>
      </li>
      <li>
        <Office name="Phone" invert={invert}>
        0000000000
          <br />
         <Office name="Email" invert={invert}>
         admin@gmail.com
         </Office>
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
