export default function Home() {
    // let count:number=5;
    // let isIceCreamLover: boolean = true;

    interface IdentityProp {
        name: string, age: number, place: "UK"|"UAE"|"India"|"USA"
    }

    // type name=string;
    // type age=number;
    // type place=string;

    const identity: IdentityProp = {
        name: "John",
        age: 25,
        place: "USA"
    }

    
    return (
        <div>
            {/* Do you like {count} chocolates? */}

            {/* <h2>{isIceCreamLover ? "Love Icecream!!" : "I don't like Ice cream!"}</h2>
             */}

            <div>
                <h2>Hi, I am {identity.name}</h2>
                <h2>I am {identity.age} years old</h2>
                <h2>I am from {identity.place} </h2>
            </div>
        </div>
    )
}