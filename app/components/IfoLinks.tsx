

import Link from 'next/link';
import { motion } from 'framer-motion';


export default function InfoLink() {
    return(
      <div>
        <div>
            <Link href="/tell-me" passHref>
              Tell Me
            </Link>
          </div>
          <div>
            <Link href="/learn-more" passHref>
              Learn More
            </Link>
          </div>
      </div>
    );
};