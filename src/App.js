import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <h1>Indian actors</h1>
      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfn08ejAil9wkgYAisbaYy-J2W1bRtP4cbVZRtFlmGR2brPUtetvWv2zb-JGwQI8shYfLha8jOXA_cOprGDtJW1A3IspUikLYaASBrggb&s=10"
        actorName="Prabhas"
        passage="Known for Baahubali, Salaar, and Adipurush."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBFgpx-Kzt1Jf9uqQsBeaEnVM4m8ygpm2qP5h7yypQQVZEGTvlt1HZGfk5XgUExxBD4XEQLxAJNLLY4Og8DI9xHjNJyc8l1ojvE0crfep&s=10"
        actorName="Allu Arjun"
        passage="Star of Pushpa, Ala Vaikunthapurramuloo, Sarrainodu."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXO4YEs_Zk7T0i16lraH_OL_jDtJOAq2anwFBYAyV9dw7Kh00-TTmO3c7xxgWSpxBI3c5BjgFJ2xrARxSFoscmL2aHTXqGAzgM5SE8kCJIVw&s=10"
        actorName="Ram Charan"
        passage="Famous for RRR, Magadheera, Rangasthalam."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSaFOPUGShurNLWv7BflxbR94iQkpgWEC74hY2cNg4WRiDNFlA7J5g5Rtlphil-S_LbeM_xaqY8g2xc_NXMO_ntoLfxMwznkW-YDmzyTJv9MKk_2Atv9HM_Ht41NU0U9Cj6WQ00itj4VaDR&s=19"
        actorName="Jr NTR"
        passage="Known for RRR, Janatha Garage, Temper."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2LNUENf5U1043obuvJfVsBF3o4-y01KBNN5DrlEtsjjCdnXj0ZRL9vNPpDSC4Q1XrObHl4Mon9q5wb_5T8yAk7c11RkbKyPBLV_XW64P&s=10"
        actorName="Mahesh Babu"
        passage="Star of Srimanthudu, Pokiri, Bharat Ane Nenu."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPMQzsiZ3FLRcKKDJQHDHoRWcltXHiLPXQT7TCd7_BPDBiaxZfpwbcirBD5jJaOEPhSTa39qtZ3rDrjQNzdLv90DA6BY4sh7l4qxy6_BN&s=10"
        actorName="Vijay"
        passage="Known for Master, Leo, Mersal."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGEhL1JCPBxjJds1-lcwkMnVBxc8XB1WrJOsmvWwYOImQOKmMdHFU76QvLWg2E04rwSZ7BA9F9BbZHzq9rvO2QAKeD8a3Wqf1qBnR0OkWrA&s=10"
        actorName="Ajith Kumar"
        passage="Famous for Valimai, Mankatha, Viswasam."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KLJQeOzPSQqvWrr8o4od-JzAGcM6rIta50bi719FcpwL19mgKDZXeJGInYsWdDFRcLu9Nzk3ECP0vghFsk7n6n2xIay8g0CD5ANsdJvIpQ&s=10"
        actorName="Rajinikanth"
        passage="Superstar known for Jailer, Robot, Kabali."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkETDmloI2WAWhPjOyWQ26G7Ohsq5_7gcfzJdT-yxXgtVpedcj__IEGaMWriZ6jU5Vw7IbMYdgV9GC1lNe1OXoU1H8mZDX6bfks46bdeh6Q&s=10"
        actorName="Kamal Haasan"
        passage="Known for Vikram, Indian, Dasavathaaram."
      />

      <Cards
        link="data:image/webp;base64,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"
        actorName="Yash"
        passage="National fame for KGF 1 & 2."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTT-ggc1ZTNlmFKPoy575LshADtLkzmI3bAlEUIstAJMlu4Ex5fswaAxMS3T0P-GKpiqDLBXSITPo_B-SEcTHZtlxU6kaeFCel8DUwgq4k&s=10"
        actorName="Suriya"
        passage="Known for Jai Bhim, Singam series."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsGIjOHe0LOgaRdPlae8Z7GWpFBHnz6jKSzs1nqM6-aQGjoHvEYf5173bPD_D5XAENShxup9W3NFfG7kSD73sq0zYrHxQrntT7A3V6KOH&s=10"
        actorName="Vikram"
        passage="Known for Anniyan, I, Ponniyin Selvan."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFsGdN_nd6dsLQRcCVBOTyaBJi3LlO_eqZxAnXijP6W_QLqmbVFy6aPoTwDDhXCLuMDNkEbS4oxyHjO5qJ3ifPjQ8Wlx0wgGrMHrVJNNEww&s=10"
        actorName="Nani"
        passage="Known for Jersey, Dasara, Shyam Singha Roy."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKq7Y6p_JP7iR3CD7YgxFP9vRB3_OUwjvDCLK_5mNYyiZlvqi5Fq1rmRaa0l4MRHXExJkp1QFAbwINtj1VJGh8D75it6z4rA-4GZg9Avwz&s=10"
        actorName="Dhanush"
        passage="Known for Asuran, VIP, Atrangi Re."
      />

      <Cards
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZkq4ZygAfr9gwmFzELCysXhWqIhxOtpPv2zPBcsh2a2sdveIhMkvpIv9CtreTt8iFe-bLqNu77lp2PmDO4pUfHcxLc4bPZQVuuTkffTt&s=10"
        actorName="Hrithik Roshan"
        passage="Known for War, Krrish, Super 30."
      />
    </div>
  );
}

export default App;
