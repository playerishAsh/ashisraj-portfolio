
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Ashisraj Nayak</h1>
        <p className="text-gray-500">Computer Science Student | Web3 Enthusiast | Competitive Programmer</p>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/playerish" target="_blank"><Linkedin /></a>
          <a href="https://codeforces.com/profile/playerish" target="_blank"><Code2 /></a>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card><CardContent>Java, C++, Python, Solidity</CardContent></Card>
          <Card><CardContent>Ethereum, Smart Contracts, MetaMask</CardContent></Card>
          <Card><CardContent>MySQL, MS SQL, Query Optimization</CardContent></Card>
          <Card><CardContent>NumPy, Pandas, Matplotlib, SciPy</CardContent></Card>
          <Card><CardContent>VS Code, GitHub, IntelliJ, Remix IDE</CardContent></Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <Card>
          <CardContent>
            <strong>Banking Management System (SQL)</strong><br />
            MySQL project managing banking operations using 10,000+ sample entries and transaction-safe updates.
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <strong>Peer-to-Peer File Sharing (C)</strong><br />
            Implemented file transfers over LAN using TCP sockets with error handling for missing files.
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <strong>Spell Checker (Python)</strong><br />
            Built a Levenshtein-based checker with frequency-based word suggestion ranking.
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Research</h2>
        <Card>
          <CardContent>
            <strong>5G Spectrum Distribution</strong><br />
            RACCAI 2024: Focused on rural-urban gap, proposed spectrum sharing to reduce deployment cost.
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Letter of Appreciation for contribution to Eloquence Consortium</li>
          <li>Top 2 in university, 362 global rank in CodeChef START176</li>
          <li>Top 5% in NPTEL Cloud Computing, Certified in COA</li>
          <li>1416 Codeforces Rating (Specialist), 3★ on CodeChef</li>
          <li>500+ coding problems solved across platforms</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Leadership</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Technical Lead: Led 50+ members in college technical clubs</li>
          <li>Core Team, CGC Cloud: Organized event with 1000+ participants</li>
        </ul>
      </section>
    </div>
  );
}
