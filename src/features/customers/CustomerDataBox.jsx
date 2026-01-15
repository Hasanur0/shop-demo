import { format, isToday } from "date-fns";
import { useState, useMemo } from "react";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { HiOutlineSparkles } from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency, formatBookingRate } from "../../utils/helpers";
import { MdOutlinePhone } from "react-icons/md";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import PaymentRow from "./PaymentRow";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import AddPaymentForm from "./AddPaymentForm";
import { HiPlus } from "react-icons/hi2";
import Select from "../../ui/Select";

// A purely presentational component
function CustomerDataBox({ customer, payments, isLoadingPayments }) {
  const [sortBy, setSortBy] = useState('date-desc')
  const {
    created_at,
    fullName,
    phoneNumber,
    address,
    ornament,
  } = customer;

  // Sort payments based on selected sort option
  const sortedPayments = useMemo(() => {
    if (!payments || payments.length === 0) return []

    const [field, direction] = sortBy.split('-')
    const sorted = [...payments].sort((a, b) => {
      if (field === 'date') {
        const dateA = new Date(a.created_at).getTime()
        const dateB = new Date(b.created_at).getTime()
        return direction === 'desc' ? dateB - dateA : dateA - dateB
      } else if (field === 'amount') {
        return direction === 'desc' ? b.amount - a.amount : a.amount - b.amount
      }
      return 0
    })
    return sorted
  }, [payments, sortBy])

  return (
    <section className="bg-grey-0 dark:bg-grey-800 border border-grey-100 dark:border-grey-700 rounded-md overflow-hidden">
      <header className="bg-brand-500 py-4 px-4 sm:py-5 sm:px-10 text-[#e0e7ff] text-base sm:text-lg font-medium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 [&_svg]:h-6 [&_svg]:w-6 sm:[&_svg]:h-8 sm:[&_svg]:w-8 [&_div:first-child]:flex [&_div:first-child]:items-center [&_div:first-child]:gap-2 sm:[&_div:first-child]:gap-4 [&_div:first-child]:font-semibold [&_div:first-child]:text-base sm:[&_div:first-child]:text-lg [&_span]:font-mono [&_span]:text-lg sm:[&_span]:text-xl [&_span]:ml-1">
        <div>
        <MdOutlinePhone />

          <p>
            <span>{phoneNumber}</span>
          </p>
        </div>

        <p className="text-sm sm:text-base">
        Created on {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
        </p>
      </header>

       <section className="py-4 px-4 sm:py-8 sm:px-10 pb-3">
        <div className="flex flex-col gap-4">
          {/* Address Section */}
          {address && (
            <div className="border-b border-grey-100 dark:border-grey-700 pb-4">
              <DataItem icon={<HiOutlineMapPin />} label="Address">
                <span className="text-grey-600 dark:text-grey-300">{address}</span>
              </DataItem>
            </div>
          )}

          {/* Ornament Section */}
          {ornament && (
            <div className="border-b border-grey-100 dark:border-grey-700 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <HiOutlineSparkles className="w-5 h-5 text-brand-600 dark:text-brand-500" />
                <h3 className="font-semibold text-grey-700 dark:text-grey-200">Ornament Details</h3>
              </div>
              <div className="flex flex-col gap-3 pl-7">
                <DataItem icon={<HiOutlineSparkles />} label="Name">
                  <span className="text-grey-600 dark:text-grey-300 font-medium">{ornament.name}</span>
                </DataItem>
                <DataItem icon={<HiOutlineSparkles />} label="Purity">
                  <span className="text-grey-600 dark:text-grey-300">{ornament.purity}</span>
                </DataItem>
                <DataItem icon={<HiOutlineSparkles />} label="Weight">
                  <span className="text-grey-600 dark:text-grey-300">{ornament.weight}</span>
                </DataItem>
                <DataItem icon={<HiOutlineCurrencyDollar />} label="Booking Rate">
                  <span className="text-grey-600 dark:text-grey-300 font-medium">{formatBookingRate(ornament.bookingRate)}</span>
                </DataItem>
              </div>
            </div>
          )}

          {/* Payments Table Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <HiOutlineCurrencyDollar className="w-5 h-5 text-brand-600 dark:text-brand-500" />
                <h3 className="font-semibold text-grey-700 dark:text-grey-200">Payments</h3>
              </div>
              <Modal>
                <Modal.Open opens="add-payment">
                  <Button size="medium">
                    <HiPlus className="inline-block mr-1 text-lg" />
                    Add Payment
                  </Button>
                </Modal.Open>
                <Modal.Window name="add-payment">
                  <AddPaymentForm customerId={customer.id} />
                </Modal.Window>
              </Modal>
            </div>
            {isLoadingPayments ? (
              <Spinner />
            ) : payments && payments.length > 0 ? (
              <>
                <div className="mb-3">
                  <Select
                    value={sortBy}
                    options={[
                      { value: 'date-desc', label: 'Most recent' },
                      { value: 'date-asc', label: 'Earliest' },
                      { value: 'amount-desc', label: 'High to low' },
                      { value: 'amount-asc', label: 'Low to high' },
                    ]}
                    onChange={(e) => setSortBy(e.target.value)}
                    type="white"
                  />
                </div>
                <Menus>
                  <Table columns="0.6fr 2fr 2.4fr 2fr 1.4fr 1fr 3.2rem">
                    <Table.Header>
                      <div>ID</div>
                      <div>Amount</div>
                      <div>Method</div>
                      <div>Transaction ID</div>
                      <div>Date</div>
                      <div>Time</div>
                      <div></div>
                    </Table.Header>
                    <Table.Body
                      data={sortedPayments}
                      render={(payment) => (
                        <PaymentRow key={payment.id} payment={payment} />
                      )}
                    />
                  </Table>
                </Menus>
              </>
            ) : (
              <p className="text-grey-500 dark:text-grey-400 text-sm pl-7">No payments found</p>
            )}
          </div>
        </div>
      </section>

      <footer className="py-3 px-4 sm:py-4 sm:px-10 text-xs text-grey-500 dark:text-grey-400 text-left sm:text-right">
        <p></p>
      </footer>
    </section>
  );
}

export default CustomerDataBox;
