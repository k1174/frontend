import { useEffect, useState } from "react";
import { Page, Text, Document, StyleSheet, PDFDownloadLink, View } from "@react-pdf/renderer";
import { useParams } from 'react-router-dom';
import Spinner from "../components/Spinner";
import * as XLSX from 'xlsx';


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
    indexCol: {
        width: "10%", // Adjust this percentage to change the width of the index column
        borderRightWidth: 1,
        borderRightColor: "black",
        borderRightStyle: "solid",
        padding: 5,
        fontSize: 10,
        textAlign: "center",
    },
    tableCol: {

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
    },
    tableHeaderIndex: {
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
        width: "10%",
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

});

// Define your PDF file structure
const PDFFile = ({ reports }) => {
    // Calculate dynamic widths for the other columns
    const totalWidth = 90; // Total width for columns other than the index column
    const dynamicWidth = (totalWidth / keys.length).toFixed(2) + '%'; // Calculate dynamic width for each column

    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header}>Event Report</Text>
                <Text style={styles.header}>Participants Details</Text>

                {/* Table Header */}
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        {/* Add the Index Header */}
                        <Text style={styles.tableHeaderIndex}>#</Text>
                        {keys.map((key) => (
                            // <th key={key} scope="col" className="px-6 py-3" >{key}</th>
                            <Text key={key} style={[styles.tableHeader, { width: dynamicWidth }]}>{key}</Text>
                        ))}
                        {/* <Text style={styles.tableHeader}>Name</Text>
                    <Text style={styles.tableHeader}>Enrollment Number</Text> */}
                        {/* <Text style={[styles.tableHeader, styles.lastColumn]}>College Email ID</Text> */}
                        {/* <Text style={styles.tableHeader}>College Email ID</Text> */}

                    </View>

                    {/* Table Rows */}
                    {reports.map((report, index) => (
                        <View style={styles.tableRow} key={index}>
                            {/* Add the Index Cell */}
                            <Text style={styles.indexCol}>{index + 1}</Text>
                            {keys.map((key) => (
                                <Text key={key} style={[styles.tableCol, { width: dynamicWidth }]}>{report.additionalDetails[key]}</Text>
                                // <td className="px-6 py-4" key={key}>{data.additionalDetails[key]}</td>
                            ))}

                        </View>
                    ))}
                </View>

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                />
            </Page>
        </Document>
    )
};


let currentReport = []
let keys = []

// Function to generate Excel file
const generateExcel = (reports) => {
    const worksheet = XLSX.utils.json_to_sheet(reports.map(report => report.additionalDetails));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reports");

    // Create a Blob and use it to download the file
    XLSX.writeFile(workbook, "Event_Report.xlsx");
};


// Your existing Download component code remains unchanged
const Download = () => {
    const { jobId } = useParams();
    const [showPreview, setShowPreview] = useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const response = await fetch(`/service/getRegistrations/${jobId}`)
            const data = await response.json();
            setData(data);
            currentReport = data;
            setLoading(false);
        };
        fetchData();
    }, [jobId]);

    if (loading) {
        return <Spinner />;
    }

    if (data.length === 0) {
        return <h1 className="text-center text-3xl mt-10">No Registrations Found</h1>;
    }

    if (!data[0].additionalDetails) {
        return <h1 className="text-center text-3xl mt-10">No Additional Details Found</h1>;
    }

    keys = Object.keys(data[0].additionalDetails);

    const togglePreview = () => {
        setShowPreview(!showPreview);
    };

    return (
        <div className="p-4">

        {/* Button Section */}
        <div className="space-x-4 flex justify-center">
          <button
      className={`text-white py-2 px-4 rounded mb-4 ${togglePreview ? 'bg-blue-500' : 'bg-blue-700'}`}
      onClick={togglePreview}
          >
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>
  
          <PDFDownloadLink
            document={<PDFFile reports={currentReport} />}
            fileName="Event_Report.pdf"
          >
            {({ loading }) =>
              loading ? (
                <button className="bg-gray-500 text-white py-2 px-4 mb-4 rounded" disabled>
                  Loading PDF...
                </button>
              ) : (
                <button className="bg-green-500 text-white py-2 px-4 mb-4 rounded">
                  Download PDF
                </button>
              )
            }
          </PDFDownloadLink>
  
          <button
            className="bg-blue-700 text-white py-2 px-4 mb-4 rounded"
            onClick={() => generateExcel(currentReport, keys)}
          >
            Download Excel
          </button>
        </div>
  
        {/* Table Preview Section */}
        {showPreview && (
          <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Report Preview</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-black">
                <thead>
                  <tr className="bg-yellow-300 text-black">
                    <th className="border border-gray-300 p-2">#</th>
                    {keys.map((key) => (
                      <th key={key} className="border border-gray-300 p-2">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentReport.map((report, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                      {keys.map((key) => (
                        <td
                          key={key}
                          className="border border-gray-300 px-4 py-2 text-center"
                        >
                          {report.additionalDetails[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
};

export default Download;