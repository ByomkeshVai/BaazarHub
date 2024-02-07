import { useState } from "react";
import { Button, Checkbox } from "@material-tailwind/react";
import { useAppDispatch } from "../../../../redux/hook";
import { setActiveStep } from "../../../../redux/features/stepperSlice/stepperSlice";

const VendorTerms = () => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="overflow-y-auto h-96">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea
          tempore, necessitatibus soluta cum vel deleniti. Exercitationem,
          pariatur, soluta repellat doloremque fugiat dolores nemo deleniti
          culpa fugit sunt recusandae nesciunt quis accusantium earum sit
          explicabo animi, molestiae amet quia! Odit quae fuga ex. Odit nam
          natus in at distinctio quod beatae maxime, nostrum corrupti laborum,
          totam, id ratione veritatis ad dolor placeat earum atque! Iure eaque
          esse animi fuga vitae, delectus aspernatur tenetur tempora,
          perspiciatis quidem aperiam, fugit eum enim aliquid. Nostrum modi,
          illo voluptatum cupiditate totam laudantium cum doloribus sequi
          recusandae quidem, incidunt quasi amet labore neque placeat maxime,
          libero eaque inventore. Unde modi totam iure ipsam ullam. Quas iure
          eligendi blanditiis. At, similique, itaque libero magni ipsam dicta
          soluta laudantium id odit earum optio necessitatibus nulla ex vitae
          accusantium deserunt repudiandae nesciunt nemo omnis consequuntur
          minima dolorem nostrum porro rerum! Aliquid nesciunt ratione doloribus
          vero quasi odio debitis harum eveniet saepe voluptatem cum optio
          officia ducimus hic maxime aliquam tempora molestias, ea et
          exercitationem non dignissimos. Vitae nam temporibus, aliquam aliquid
          beatae magnam fugit suscipit aperiam sunt consectetur officiis sit
          quasi minus, eum, molestiae dicta quaerat hic. Amet quia laborum
          dignissimos quod ipsum doloremque perspiciatis a recusandae qui, quas
          incidunt magni corrupti nam hic sint architecto inventore? Non harum
          nulla nisi repellat pariatur optio vel numquam! Voluptatem cupiditate
          tempore magnam ratione laborum, magni aliquam possimus ducimus fugiat
          a soluta, consectetur itaque corrupti. Earum et enim quaerat officia
          voluptate! Aliquam ab sapiente nemo velit at numquam enim eos beatae,
          fuga dolor laudantium nulla quis. Possimus earum, voluptates dolor
          aspernatur fugit doloribus saepe maiores recusandae omnis? Illo
          repudiandae aspernatur ad doloribus ea officia laudantium, ipsa nisi
          dolorum exercitationem nesciunt enim possimus! Provident molestiae
          doloribus maxime corporis accusamus accusantium illum tenetur quae
          reprehenderit, id mollitia aperiam dolorem! Esse sed quo expedita eum
          alias maiores optio quam eaque ducimus sequi omnis excepturi labore,
          accusantium et officiis at aut tempore nam officia eius. Nesciunt quia
          odit vitae asperiores accusamus. Quae ratione neque quos cupiditate
          consectetur, hic, harum, odit illo numquam eligendi totam porro
          reprehenderit! Perspiciatis assumenda, ea molestias dicta omnis atque
          quia placeat fuga, sint cumque libero ipsam quas temporibus hic harum
          modi voluptates commodi, maxime doloremque? Ex quasi facere vitae
          quisquam dignissimos consequuntur porro. Tempore quod ipsum laboriosam
          assumenda beatae sapiente quidem fugiat maxime odit velit, debitis,
          maiores vero recusandae doloremque consequatur vel asperiores vitae!
          Atque distinctio sit officia, laudantium eligendi consequuntur fuga
          repellat cum unde, a, optio error iusto explicabo voluptate.
          Perspiciatis aut sapiente minima, iusto voluptas cupiditate obcaecati
          nihil excepturi fuga exercitationem vitae optio recusandae? Quae,
          accusamus! Deserunt iure illum ea quidem vero necessitatibus corrupti,
          delectus nulla a quisquam sequi? Aliquam unde nulla minus, accusantium
          similique alias mollitia obcaecati, illo vero cum voluptas. Maxime
          tenetur quasi odio, quod aspernatur neque illum earum perferendis illo
          minima eveniet perspiciatis magni enim quibusdam iusto? Impedit cum,
          magni commodi beatae totam esse labore ea odio rem illum ad ullam
          adipisci sit pariatur. Nulla facere vel deleniti ad iusto numquam
          possimus, dolore molestiae velit. Ut.
        </h2>
      </div>
      <div className="flex items-center justify-end gap-10 mt-10">
        <Checkbox
          crossOrigin={true}
          label="I Agree With The Terms & Condition"
          onChange={handleCheckboxChange}
        />
        <Button
          placeholder={""}
          variant="gradient"
          color="red"
          disabled={!isChecked}
          onClick={() => dispatch(setActiveStep(1))}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default VendorTerms;
