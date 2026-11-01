import { Alert, Badge, Button, Card, Switch } from 'open-glass-ui'
import { ThemeSwitch } from './theme-switch'

export default function HomePage() {
  return (
    <main className='relative mt-4 mb-2 grow space-x-5 space-y-5 border border-teal-100 p-5'>
      <Button className='uppercase' size='small' type='button' variant='primary'>
        Create project
      </Button>

      <Card eyebrow='Test eye' footer='Test footer' title='Test title'>
        Test Card
      </Card>

      <Badge>Test Badge</Badge>

      <Alert title='Test' tone='positive'>
        Test Alert
      </Alert>

      <Switch
        className='w-fit'
        defaultChecked
        description='Only alert me for direct mentions.'
        label='Quiet notifications'
      />

      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum placeat dolore voluptatibus. Odio consequatur
        ipsa veniam laborum vel, ut eius sit similique animi ipsam aperiam doloremque illum fugiat ex recusandae optio.
        Distinctio nisi reprehenderit dolorem nemo delectus laudantium! Saepe minus ad animi unde, vero obcaecati
        quaerat, soluta temporibus quod officia provident recusandae delectus alias ex quia sed nemo exercitationem in
        ab voluptatum eaque asperiores aliquam! Eum optio officiis, quam laborum error, deleniti recusandae modi itaque
        cupiditate debitis atque nulla natus aspernatur rerum voluptates ex provident doloribus quo ipsam excepturi nemo
        molestiae. Laudantium necessitatibus ipsam quis quos totam obcaecati est consectetur laboriosam corporis quod
        vitae consequuntur voluptatem repellat atque temporibus optio commodi sit similique illo error impedit,
        dignissimos facilis numquam. Necessitatibus blanditiis eveniet distinctio illum perferendis explicabo
        reprehenderit, quae corporis doloremque vero. Recusandae mollitia voluptas iusto dicta dolore nobis ad odio
        expedita repudiandae, rerum doloribus laboriosam cupiditate corrupti numquam rem vitae?
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse dolores adipisci nemo quos molestiae ratione
        fugit perspiciatis officia. Repellat, provident eaque quasi consequuntur suscipit tempora accusantium dolores
        soluta illum unde, perferendis expedita rerum enim maiores doloremque eius. Reprehenderit voluptatum molestias
        nobis ipsum iusto, ullam pariatur officiis libero ex. Voluptas fuga officiis perspiciatis error voluptates
        cumque consequuntur repellat nesciunt id adipisci! Expedita minima nihil hic, voluptatem sunt beatae
        perspiciatis perferendis vitae iusto impedit dolorem modi officia magni consequatur et asperiores mollitia.
        Explicabo alias laboriosam, exercitationem architecto vel tempora odit corrupti sapiente cupiditate perferendis
        tenetur nemo dolor ducimus eveniet fuga voluptatibus ipsum?
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla accusantium sint nihil autem cupiditate
        repellendus dolores rerum laudantium impedit mollitia, modi perspiciatis enim eaque laborum reprehenderit.
        Laudantium, iusto, recusandae mollitia quidem sit magnam repudiandae quisquam distinctio laborum aliquam libero.
        Provident labore ratione modi eaque error numquam perferendis dolore? Beatae corporis sequi earum recusandae
        illum odit fugit molestias numquam minima dignissimos esse, quia iusto itaque rem quidem, rerum ratione quas,
        saepe ea vero inventore pariatur facilis. Rerum voluptas deserunt labore sit architecto, ab sequi! Aliquid,
        perferendis itaque magnam facilis obcaecati porro praesentium quae iste saepe ullam, expedita a, dolorum eius
        cupiditate id est minima minus veritatis quod numquam omnis dolore. Autem qui assumenda cumque excepturi
        quisquam cum voluptatum reiciendis odit nulla.
      </p> */}

      <ThemeSwitch />
    </main>
  )
}
