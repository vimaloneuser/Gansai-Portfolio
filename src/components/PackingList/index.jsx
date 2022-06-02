import React from "react";

const PackingList = () => {
  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <table
        className=" table-responsive table table-bordered"
        style={{ margin: 20 }}
      >
        <thead>
          <tr>
            <th>Product </th>
            <th>Size cm</th>
            <th>Thickness MM</th>
            <th>Pallet Size</th>
            <th>Pcs / Box</th>
            <th>Weight / Box (Kg)</th>
            <th>Sq.Mtr / Box</th>
            <th>Box / Pallet</th>
            <th>Pallet / Cont.</th>
            <th>Box / Cont.</th>
            <th>Total Box Cont.</th>
            <th>Net Weight</th>
            <th>Gross Weight</th>
            <th>SQM / Cont.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Glazed Porcelain Tiles</th>
            <td>60x60</td>
            <td>8.5 </td>
            <td>42x42 </td>
            <td>4 </td>
            <td> 28</td>
            <td> 1.44</td>
            <td>40 </td>
            <td> 24</td>
            <td> 960</td>
            <td> 960</td>
            <td>26880 </td>
            <td>27380.00 </td>
            <td> 1382.40</td>
          </tr>
          <tr>
            <td> 80x80 </td>
            <td>9.0 </td>
            <td>44x44 </td>
            <td>3 </td>
            <td> 28.2</td>
            <td> 1.28</td>
            <td> 40</td>
            <td>20 </td>
            <td>800 </td>
            <td>800 </td>
            <td>22800.00 </td>
            <td> 23200.00</td>
            <td>1024.00 </td>
          </tr>
          <tr>
            <td>60x120 </td>
            <td>9.0 </td>
            <td>44x44</td>
            <td> 2</td>
            <td> 30</td>
            <td> 1.44</td>
            <td>60 </td>
            <td> 10</td>
            <td> 600</td>
            <td> 840</td>
            <td> 26240.00</td>
            <td>26640.00 </td>
            <td>1209.60 </td>
          </tr>

          <tr>
            <td>60x120 </td>
            <td>9.0 </td>
            <td>30x48</td>
            <td> 2</td>
            <td> 30</td>
            <td> 1.44</td>
            <td>30 </td>
            <td> 8</td>
            <td> 240</td>
            <td> 840</td>
            <td> 26240.00</td>
            <td>26640.00 </td>
            <td>1209.60 </td>
          </tr>

          <tr>
            <td> 80x160 </td>
            <td>9.0 </td>
            <td>44x44 </td>
            <td>2 </td>
            <td> 55</td>
            <td>2.56 </td>
            <td> 44</td>
            <td>10.00 </td>
            <td> 440</td> <td> 440</td>
            <td>25000.00 </td>
            <td> 25400.00</td>
            <td> 1126.40</td>
          </tr>

          <tr>
            <td> 20x120</td>
            <td>9.0 </td>
            <td>29.5x48 </td>
            <td>5 </td>
            <td>28 </td>
            <td>1.20 </td>
            <td> 26</td>
            <td> 36</td>
            <td>936 </td>
            <td> 936</td>
            <td>26200.00 </td>
            <td>26600.00</td>
            <td> 1123.20</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default PackingList;
