// 1. Welcome Component using interface

interface WelcomeProps {
  username: string;
  isPremium: boolean;
}

function Welcome({ username, isPremium }: WelcomeProps) {
  return (
    <div>
      <h2>
        {isPremium
          ? `Welcome back, premium user ${username}!`
          : `Welcome, guest ${username}`}
      </h2>
    </div>
  );
}


// 2. ProductCard Component using interface

interface ProductCardProps {
  name: string;
  price: number;
  description?: string;
}

function ProductCard({
  name,
  price,
  description,
}: ProductCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>

      {description && <p>{description}</p>}
    </div>
  );
}


// 3. Using type instead of interface

type UserCardProps = {
  username: string;
  isPremium: boolean;
};

function UserCard({
  username,
  isPremium,
}: UserCardProps) {
  return (
    <div>
      <h3>{username}</h3>
      <p>
        {isPremium ? "Premium User" : "Guest User"}
      </p>
    </div>
  );
}


// App Component

export default function App() {
  return (
    <div>
      <Welcome username="Zakir" isPremium={true} />

      <ProductCard
        name="Laptop"
        price={999}
        description="Gaming laptop"
      />

      <ProductCard
        name="Phone"
        price={500}
      />

      <UserCard
        username="Ali"
        isPremium={false}
      />


      {/* 4. Wrong Type Example */}

      {/*
      <ProductCard
        name="Tablet"
        price="free"
      />
      */}

      {/* TypeScript Error:
          Type 'string' is not assignable to type 'number'
      */}
    </div>
  );
}