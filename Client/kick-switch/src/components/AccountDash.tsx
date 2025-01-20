import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { logout } from "@/state/user/userSlice";
import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

const AccountDash = () => {
  const account = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-[90%] h-[600px] shadow-lg rounded-lg border-gray-100 border-solid border-[1px] ">
      <div className="w-[25%] h-full border-gray-100 border-r-[1px] p-4">
        <div>
          <Avatar className="h-[50px] w-[50px]">
            <AvatarImage src="" />
            <AvatarFallback>
              {account.user.fullname.split(" ")[0].charAt(0) +
                account.user.fullname.split(" ")[1].charAt(0)}
            </AvatarFallback>
          </Avatar>
          <p className="text-lg font-bold">{account.user.username}</p>
          <p className="text-sm">{account.user.email}</p>
          <br />
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>My Account</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>My Profile</li>
                <li>My Orders</li>
                <li>My Listings</li>
                <li>My Trades</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Settings</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Account Settings</li>
                <li>Privacy Settings</li>
                <li>Notification Settings</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <Button
              className="w-full mt-1"
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              Logout
            </Button>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AccountDash;
