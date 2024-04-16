import React from "react";

import {
  Page,
  Text,
  StyleSheet,
  Document,
  View,
  Svg,
  Line,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    // backgroundColor: "#E4E4E4",
    padding: 30,
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  invoiceTitle: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
  },
  invoiceNumber: {
    fontSize: 12,
    textAlign: "right",
  },
  customerDetails: {
    fontSize: 12,
    lineHeight: 1.6,
  },
  customerDetailsRight: {
    fontSize: 12,
    lineHeight: 1.2,
    textAlign: "right",
  },
  table: {
    display: "table",
    width: "auto",
    // borderStyle: "solid",
    border: "none",
    // borderBottom: 1,
    // borderWidth: 1,
    // borderRightWidth: 0,
    // borderBottomWidth: 0,
    marginTop: 20,
    marginBottom: 20,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    border: "none",
    borderBottom: 1,
    textAlign: 'left'
  },
  tableCol: {
    width: "20%",
    border: "none",
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderLeftWidth: 0,
    // borderTopWidth: 0,
    padding: 5,
  },
  tableCellHeader: {
    margin: "auto",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: 'left'
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  descriptionHeader: {
    width: "40%",
    borderStyle: "solid",
    border: "none",
    borderBottom: 1,
    textAlign: 'left'
  },
  descriptionCell: {
    width: "40%",
    textAlign: 'left'
  },
  totalsContainer: {
    marginTop: 25,
    paddingRight: 25,
    alignItems: "flex-end",
  },
  totalsLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  totalsLabel: {
    fontSize: 12,
    paddingTop: 3,
    fontFamily: "Helvetica-Bold",
  },
  totalsValue: {
    fontSize: 12,
    paddingTop: 3,
  },
  bottomNotice: {
    marginTop: 25,
    textAlign: "center",
  },
  billingDetails: {
    fontSize: 12,
    lineHeight: 1.2,
  },
  datesRight: {
    fontSize: 12,
    lineHeight: 1.2,
    textAlign: "right",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datesGrid: {
    paddingLeft: 10,
  },
});

const PDFFIle = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.invoiceTitle}>Invoice</Text>

      <View style={styles.headerContainer}>
        <View style={styles.logo} />

        <View>
          <Text style={styles.customerDetailsRight}>Demo Customer</Text>
          <Text style={styles.customerDetailsRight}>Company Address</Text>
          <Text style={styles.customerDetailsRight}>Street1</Text>
          <Text style={styles.customerDetailsRight}>Street2</Text>
          <Text style={styles.customerDetailsRight}>Noida - 247001</Text>
          <Text style={styles.customerDetailsRight}>In</Text>
        </View>
      </View>

      <Svg height="10" width="540">
        <Line
          x1="0"
          y1="5"
          x2="540"
          y2="5"
          strokeWidth={1}
          stroke="rgb(0,0,0)"
        />
      </Svg>

      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.text}>nikhil-0test0</Text>
        </View>
        <View>
          <Text style={styles.invoiceNumber}>INVOICE | YBH-2400436</Text>
        </View>
      </View>

      <View style={styles.headerContainer}>
        <View style={styles.billingDetails}>
          <Text>Billing Address</Text>
          <Text>221 Baker Street</Text>
          <Text>Mumbai - 123456</Text>
          <Text>IN</Text>
        </View>

        <View style={styles.datesRight}>
          <View style={styles.datesGrid}>
            <Text>Date 1</Text>
            <Text>Sub Date 1</Text>
          </View>
          <View style={styles.datesGrid}>
            <Text>Date 2</Text>
            <Text>Sub Date 2</Text>
          </View>
          <View style={styles.datesGrid}>
            <Text>Date 3</Text>
            <Text>Sub Date 3</Text>
          </View>
        </View>
      </View>

      {/* Table for items */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <View style={styles.descriptionHeader}>
            <Text style={styles.tableCellHeader}>Description</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Unit Price</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Quantity</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Amount</Text>
          </View>
        </View>
        {/* Table Rows */}
        <View style={styles.tableRow}>
          <View style={styles.descriptionCell}>
            <Text style={styles.tableCell}>Line item 1 - TEST 1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>200</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>900</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>180,000</Text>
          </View>
        </View>
      </View>

      <Svg height="10" width="540">
        <Line
          x1="280"
          y1="5"
          x2="540"
          y2="5"
          strokeWidth={1}
          stroke="rgb(0,0,0)"
        />
      </Svg>

      {/* Totals section */}
      <View style={styles.totalsContainer}>
        <View style={styles.totalsLine}>
          <Text style={styles.totalsLabel}>Sub Total:</Text>
          <Text style={styles.totalsValue}>BAM 309.93</Text>
        </View>
        {/* ...additional totals lines as needed */}
      </View>

      {/* Bottom Notice */}
      <Text style={styles.bottomNotice}>This is bottom notice line</Text>
    </Page>
  </Document>
);

export default PDFFIle;
