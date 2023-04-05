import Link from 'next/link';

export default function header(){
    return(
    <>
    <header>
          <h3><Link href='/'>NutLab</Link></h3>
          <nav>
          <ul>
            <li><Link href="/" className="active">Home</Link></li>
            <li><Link href="">Nutrition Labels</Link></li>
            <li><a href="https://www.dunkindonuts.com" target="_blank" className="dunkin-title">Dunkin<span>'</span></a></li>
            <li><Link href="">About</Link></li>
            <li><a href="https://www.dunkindonuts.com/content/dam/dd/pdf/nutrition.pdf" target="_blank">Official Datasheet</a></li>
          </ul>
        </nav>
      </header>
    </>
    );
}