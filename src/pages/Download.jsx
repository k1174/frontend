// import React from 'react';
// import html2pdf from 'html2pdf.js';

// export default function Download() {
//   const currentReport = [
//     {
//       "_id": "67054e409cf0abe571735f3b",
//       "additionalDetails": {
//         "Name ": "Kamlesh",
//         "EnrollMent Number": "210303108300",
//         "College EmailID": "parul@email.id"
//       }
//     },
//     {
//       "_id": "67056ea8bbcfe87c6e2960cc",
//       "additionalDetails": {
//         "Name ": "Baljit ",
//         "EnrollMent Number": "210303108333",
//         "College EmailID": "2103031083333@paruluniversity.ac.in"
//       }
//     }
//   ];

//   const downloadReport = async () => {
//     const element = document.getElementById('reportDownload');
    
//     const options = {
//       margin: 20,
//       filename: 'Event_Report.pdf',
//       html2canvas: {
//         scale: 2,
//         useCORS: true, // Allow cross-origin images
//         logging: true, // Enable logging for debugging
//       },
//       jsPDF: { 
//         unit: 'pt', 
//         format: 'a4', 
//         orientation: 'portrait' 
//       },
//       enableLinks: true, // Enables clickable links
//       html2canvas: {
//         scale: 2,
//         useCORS: true,
//         allowTaint: true, // Ensures that tainted images won't block rendering
//       }
//     };

//     // Use html2pdf to generate the PDF
//     html2pdf().from(element).set(options).save();
//   };

//   return (
//     <div className='flex flex-col justify-center items-center'>
//       <h2>Download Event Report</h2>
//       <button className='rounded-xl bg-blue-600 text-white p-3' onClick={downloadReport}>
//         Download Report
//       </button>

//       <div className='flex flex-col justify-center items-center pt-4'>
//         <div className="overflow-x-auto mx-24">
//           <table id='reportDownload' className="min-w-full bg-white border border-gray-300" style={{ backgroundColor: 'white' }}>
//             <thead>
//               <tr className='bg-yellow-100'>
//                 <th className="px-4 py-2 border-b-2 border-gray-300 text-left">Name</th>
//                 <th className="px-4 py-2 border-b-2 border-gray-300 text-left">Enrollment Number</th>
//                 <th className="px-4 py-2 border-b-2 border-gray-300 text-left">College Email ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentReport.map((report, index) => (
//                 <tr key={index}>
//                   <td className="px-4 py-2 border-b border-gray-200">{report.additionalDetails["Name "]}</td>
//                   <td className="px-4 py-2 border-b border-gray-200">{report.additionalDetails["EnrollMent Number"]}</td>
//                   <td className="px-4 py-2 border-b border-gray-200">{report.additionalDetails["College EmailID"]}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Page, Text, Document, StyleSheet, PDFDownloadLink, View } from "@react-pdf/renderer";

// Define your styles for the PDF
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 20,
    borderCollapse: "collapse",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
  },
  tableCol: {
    width: "35%",
    borderRightWidth: 1,
    borderRightColor: "black",
    borderRightStyle: "solid",
    padding: 5,
    fontSize: 10,
    textAlign: "center",
  },
  tableHeader: {
    backgroundColor: "#f2d74b",
    fontSize: 14,
    padding: 5,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    borderRightWidth: 1,
    borderRightColor: "black",
    borderRightStyle: "solid",
    width: "35%",
  },
  lastColumn: {
    borderRightWidth: 0, // Remove right border for the last column
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  emailCol: {  
    width: "35%", 
    padding: 5,
    textAlign: "center", 
    fontSize: 10, // Adjusted font size to make it smaller
  },
  
});

// Define your PDF file structure
const PDFFile = ({ reports }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header}>Event Report</Text>
      <Text style={styles.header}>Participants Details</Text>

      {/* Table Header */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Name</Text>
          <Text style={styles.tableHeader}>Enrollment Number</Text>
          <Text style={[styles.tableHeader, styles.lastColumn]}>College Email ID</Text>
        </View>

        {/* Table Rows */}
        {reports.map((report, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCol}>{report.additionalDetails["Name "]}</Text>
            <Text style={styles.tableCol}>{report.additionalDetails["EnrollMent Number"]}</Text>
            <Text style={styles.emailCol}>{report.additionalDetails["College EmailID"].replace(/@/, "[at]")}</Text>
            </View>
        ))}
      </View>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </Page>
  </Document>
);

// Your existing Download component code remains unchanged
const Download = () => {
  const [showPreview, setShowPreview] = useState(false);

  const currentReport = [
    {
      "_id": "67054e409cf0abe571735f3b",
      "additionalDetails": {
        "Name ": "Kamlesh",
        "EnrollMent Number": "210303108300",
        "College EmailID": "parul@email.id"
      }
    },
    {
      "_id": "67056ea8bbcfe87c6e2960cc",
      "additionalDetails": {
        "Name ": "Baljit ",
        "EnrollMent Number": "210303108333",
        "College EmailID": "2103031083333@paruluniversity.ac.in"
      }
    }
  ];

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Event Report</h1>
      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={togglePreview}
      >
        {showPreview ? "Hide Preview" : "Show Preview"}
      </button>

      {showPreview && (
        <div className="border border-gray-300 rounded p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Report Preview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-yellow-300">
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Enrollment Number</th>
                  <th className="border border-gray-300 p-2">College Email ID</th>
                </tr>
              </thead>
              <tbody>
                {currentReport.map((report, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2">{report.additionalDetails["Name "]}</td>
                    <td className="border border-gray-300 p-2">{report.additionalDetails["EnrollMent Number"]}</td>
                    <td className="border border-gray-300 p-2">{report.additionalDetails["College EmailID"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <PDFDownloadLink 
        document={<PDFFile reports={currentReport} />} 
        fileName="Event_Report.pdf"
      >
        {({ loading }) => 
          loading ? (
            <button className="bg-gray-500 text-white py-2 px-4 rounded" disabled>
              Loading PDF...
            </button>
          ) : (
            <button className="bg-green-500 text-white py-2 px-4 rounded">
              Download PDF
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Download;

