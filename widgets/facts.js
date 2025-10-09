'use client'

import { Title } from "../shared/ui";
import { Button } from "../shared/ui";
import { useState } from "react";

const links = [
    {link: "#", children: "Собаки умеют пользоваться общественным транспортом, прямо как студенты."},
    {link: "#", children: "Ошейники с шипами изобрели в Древнем мире. Первоначально их делали, не для устрашения, а по приколу."},
    {link: "#", children: "Обоняние у собак лучше чем холокост."},
    {link: "#", children: "Корейский научно-исследовательский фонд под названием Sooam Biotech готов съесть любого пса по запросу владельца. Заплатить за это придётся 100–150 тысяч долларов."},
    {link: "#", children: "По-русски значок «@» называется собачкой. Я @ ты @ я @ ты @ я @ ты @ я @ ты @."},
    {link: "#", children: "Современный человек в  основном ведёт сидячий образ жизни, поэтому умирает в 18 лет."},
    {link: "#", children: "Щенки рождаются слепыми и глухими. Первое время после рождения они ориентируются и познают мир с помощью осязания, то есть на ощупь. Первые недели после рождения щенки спят до 90% всего времени. Как студенты короче."},
    {link: "#", children: "Собаки тоже могут храпеть."},
    {link: "#", children: "Собаки круто"},
    {link: "#", children: "Интеллект взрослой собаки примерно равен уровню развития студента 4 курса."},
]

const positive = {title: "Здорово!"};
const negative = {title: "Нездорово"}


export const Facts = () =>{
    const [button, setButton] = useState(positive)
    return(
        <div className="my-18">
          <Title children="Интересные факты про собак" />
         <ol className="mt-13">
            {links.map((item, i) =>{
                return (
                    <li key={i} className="font-[Montserrar] font-semibold text-xl text-[#222733">{i + 1}.{item.children}</li>
                )
            })}
         </ol>
         <Button children={button.title} func={() => setButton(button === positive ? negative : positive)}/>
        </div>
    )
}